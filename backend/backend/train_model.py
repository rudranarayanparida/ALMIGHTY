import os
import json
import lightgbm as lgb
import numpy as np
import joblib
from sklearn.model_selection import train_test_split

# CHANGE THIS PATH
jsonl_dir = r"D:\Study\RBU SEMESTER 2\ember2018"

train_files = [
    "train_features_0.jsonl",
    "train_features_1.jsonl"
]

def load_data(files, max_per_file=20000):
    data = []
    for file in files:
        path = os.path.join(jsonl_dir, file)
        with open(path, "r") as f:
            count = 0
            for line in f:
                item = json.loads(line)
                if item["label"] in [0, 1]:
                    data.append(item)
                    count += 1
                if count >= max_per_file:
                    break
    return data

def extract_xy(data):
    X, y = [], []
    for item in data:
        features = []
        features.extend(item.get("histogram", []))
        features.extend(item.get("byteentropy", []))
        features.extend(item.get("byte_histogram", []))
        features.extend(item.get("general", {}).values())
        X.append(features)
        y.append(item["label"])
    return np.array(X), np.array(y)

print("Loading data...")
data = load_data(train_files)

X, y = extract_xy(data)

print("Training model...")
model = lgb.LGBMClassifier(n_estimators=100)
model.fit(X, y)

# 🔥 SAVE MODEL
joblib.dump(model, "model.pkl")

print("✅ model.pkl created successfully")