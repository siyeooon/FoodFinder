// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB 연결
mongoose.connect("mongodb://localhost:27017/myloginapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// 모델 정의
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// 미들웨어 설정
app.use(express.json());
app.use(cors());

// 회원 가입
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 사용자 생성
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.json({ success: true, message: "회원 가입이 완료되었습니다." });
  } catch (error) {
    res.status(500).json({ success: false, message: "서버 오류입니다." });
  }
});

// 로그인
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 사용자 확인
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "유저를 찾을 수 없습니다." });
    }

    // 비밀번호 비교
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }

    // 토큰 생성
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "mysecretkey",
      {
        expiresIn: "1h",
      }
    );

    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "서버 오류입니다." });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
