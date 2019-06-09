const ErrTipsObj = {
    errorTips:{
      chinese:{
        Is_LoinOut:"是否退出登录？",
        Tips:"提示",
        Yes:"是",
        No:"否",
        LoginOut_Successfully:"退出登录成功",
        No_orders_for_the_time_being:"暂时不能下单",
        In_the_order:"下单中",
        In_the_game:"游戏中",
        System_processing:"系统处理中",
        new_data:"新增10条数据",
        List_refresh_succeeded:"列表刷新成功",
        login_timeout:"登录超时",
        login_again:"该用户已经在别的设备登录，请重新登录！",
        Not_logged_in:"尚未登录",
        Registered_Successfully:"注册成功",
        order_successfully:"下单成功",
        order_failed:"下单失败",
        modified_successfully:"修改用户名成功",
        modified_failed:"修改用户名失败",
        Copy_success:"复制成功",
        Copy_failed:"复制失败",
        Modified_avatar_successfully:"修改头像成功",
        Modified_avatar_failed:"修改头像失败",
        Password_changed_successfully:"修改密码成功",
        Password_changed_failed:"修改密码失败",
        The_password_is_wrong:"密码有误",
        number_already_exists:"手机号已经存在",
        Invalid_phone_number:"无效手机号",
        Password_mistake:"密码错误",
        verification_ok:"验证码已发送",
        verification_Notok:"验证码发送失败",
        Verification_code_error:"验证码错误",
        L_succsee:"登录成功",
        R_succsee:"注册成功"
      },
      English:{
        Is_LoinOut:"Whether to log out or not？",
        Tips:"Tips",
        Yes:"Yes",
        No:"No",
        LoginOut_Successfully:"Logged out successfully",
        No_orders_for_the_time_being:"No orders for the time being",
        In_the_order:"In the order",
        In_the_game:"In the game",
        System_processing:"System processing",
        new_data:"Add 10 new data",
        List_refresh_succeeded:"List refresh succeeded",
        login_timeout:"The login timeout",
        login_again:"This user has already logged in on another device, please login again!",
        Not_logged_in:"Not logged in",
        Registered_Successfully:"Registered successfully",
        order_successfully:"order successfully",
        order_failed:"order failed",
        modified_successfully:"The user name was modified successfully",
        modified_failed:"Failed to change user name",
        Copy_success:"Copy success",
        Copy_failed:"Copy the failure",
        Modified_avatar_successfully:"Modified avatar successfully",
        Modified_avatar_failed:"Failed to modify the avatar",
        Password_changed_successfully:"Password changed successfully",
        Password_changed_failed:"Password change failed",
        The_password_is_wrong:"The password is wrong",
        number_already_exists:"The phone number already exists",
        Invalid_phone_number:"Invalid phone number",
        Password_mistake:"Password mistake",
        verification_ok:"The verification code has been sent",
        verification_Notok:"Verification code sending failed",
        Verification_code_error:"Verification code error",
        L_succsee:"Login successful",
        R_succsee:"Registered successfully"
      },
      upChinese:{
        Is_LoinOut:"是否退出登錄？",
        Tips:"提示",
        Yes:"是",
        No:"否",
        LoginOut_Successfully:"退出登录成功",
        No_orders_for_the_time_being:"暫時不能下單",
        In_the_order:"下單中",
        In_the_game:"遊戲中",
        System_processing:"系統處理中",
        new_data:"新增10條數據",
        List_refresh_succeeded:"列表刷新成功",
        login_timeout:"登錄超時",
        login_again:"該用戶已經在別的設備登錄，請重新登錄！",
        Not_logged_in:"尚未登錄",
        Registered_Successfully:"註冊成功",
        order_successfully:"下單成功",
        order_failed:"下單失敗",
        modified_successfully:"修改用護名成功",
        modified_failed:"修改用戶名失敗",
        Copy_success:"復制成功",
        Copy_failed:"復制失敗",
        Modified_avatar_successfully:"修改頭像成功",
        Modified_avatar_failed:"修改頭像失敗",
        Password_changed_successfully:"修改密碼成功",
        Password_changed_failed:"修改密碼失敗",
        The_password_is_wrong:"密碼有誤",
        number_already_exists:"手機號已經存在",
        Invalid_phone_number:"無效手機號",
        Password_mistake:"密碼錯誤",
        verification_ok:"驗證碼已發送",
        verification_Notok:"驗證碼發送失敗",
        Verification_code_error:"驗證碼錯誤",
        L_succsee:"登錄成功",
        R_succsee:"註冊成功"
      },
      Japanese:{
        Is_LoinOut:"登録を退出するか？",
        Tips:"提示",
        Yes:"は",
        No:"いいえ",
        LoginOut_Successfully:"ログアウトの成功を",
        No_orders_for_the_time_being:"しばらく注文できない。",
        In_the_order:"注文中",
        In_the_game:"ゲーム中",
        System_processing:"システム処理中",
        new_data:"10項目のデータを追加",
        List_refresh_succeeded:"リストの刷新成功",
        login_timeout:"アクセスアウト",
        login_again:"このユーザーは既に別の装置にログインしていますので、再登録してください!",
        Not_logged_in:"未登録",
        Registered_Successfully:"登録に成功する",
        order_successfully:"注文に成功する",
        order_failed:"注文に失敗する",
        modified_successfully:"ユーザー名の修正に成功しました。",
        modified_failed:"ユーザー名の修正に失敗します。",
        Copy_success:"コピーに成功する",
        Copy_failed:"コピーに失敗する",
        Modified_avatar_successfully:"修正が成功した。",
        Modified_avatar_failed:"修正に失敗します。",
        Password_changed_successfully:"暗号の成功を改める",
        Password_changed_failed:"パスワードを改正して失敗する",
        The_password_is_wrong:"パスワードが誤る",
        number_already_exists:"携帯番号は既に存在しています。",
        Invalid_phone_number:"無効携帯電話番号",
        Password_mistake:"暗号の誤り",
        verification_ok:"検証コードは既に送信されている。",
        verification_Notok:"検証コードはエラーを送信する。",
        Verification_code_error:"コードエラーを検証する",
        L_succsee:"登録に成功する",
        R_succsee:"登録に成功する"
      }
    },
    errorTipObj:{},
    setErrorTips:function (key) {
      this.errorTipObj = this.errorTips[key];
    },
    getErrorTipsObj:function () {
      return this.errorTipObj;
    }
}
export default ErrTipsObj;