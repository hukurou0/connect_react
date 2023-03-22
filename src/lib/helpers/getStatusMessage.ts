export const getStatusMassage = (status: number): string => {
  switch (status) {
    /** Custom Message */

    /** Common */
    case 1: return ""; // Succeeded
    case 2: return "入力形式が正しくありません。";
    case 3: return "サーバーエラーが発生しました。後ほどお試しください。";
    /** Log In */
    case 101: return "認証に失敗しました。入力内容を確認の上、もう一度お試しください。";
    case 102: return "無効なユーザーです。アカウントが凍結されている可能性があります。お手数ですが管理者にご連絡ください。"
    /** Sign Up */
    case 201: return "このユーザー名はすでに使用されています。";
    /** Email Verification */
    case 211: return "メールアドレスが無効です。メールアドレスが未認証、もしくは存在しない可能性があります。";
    case 212: return "ワンタイムパスワードの値が無効です。";

    default: return "サーバー内で予期しないエラーが発生しました。";
  }
}