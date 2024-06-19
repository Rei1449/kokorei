import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const supabase = createClient(process.env.VITE_SUPABASE_URL || "", process.env.VITE_SUPABASE_API_KEY || "");
  const onSubmit = async(e: any) => {
    e.preventDefault();
    try{
      const { error:signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      if (signUpError) {
        throw signUpError;
      }
      alert("登録完了メールを確認してください");
    }catch(error){
      alert("エラーが発生しました");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>メールアドレス</label>
          <input type="email"
            required value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password"
            required value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード（確認）</label>
          <input type="password"
            required value={passwordConf}
            onChange={e => setPasswordConf(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">サインアップ</button>
        </div>
      </form>
    </>
  );
}