import urllib
import webbrowser
import oauth2 as oauth


class TwitterOauth:
    REQUEST_TOKEN_URL = "https://api.twitter.com/oauth/request_token"
    ACCESS_TOKEN_URL = "https://api.twitter.com/oauth/access_token"
    AUTHENTICATE_URL = "https://api.twitter.com/oauth/authorize"

    def __init__(self, key, secret):
        self.consumer = oauth.Consumer(key=key, secret=secret)
        self.request_token_content = None

    def get_authenticate_url(self):
        """
        リクエストトークンを取得し、認証ページのURLを返す
        """
        self._set_request_token_content()
        request_token = self.request_token_content["oauth_token"][0]
        query = urllib.parse.urlencode({"oauth_token": request_token})
        authenticate_url = self.AUTHENTICATE_URL + "?" + query
        return authenticate_url

    def get_access_token_content(self, input_oauth_token, oauth_verifier):
        """
        ユーザーが入力した oauth_token と oauth_verifier をもとに
        アクセストークン等の情報を取得してdictとして返す
        """
        # ※内部で取得したリクエストトークンと一致するか確認（任意）
        original_oauth_token = self.request_token_content["oauth_token"][0]
        if input_oauth_token != original_oauth_token:
            print("入力された oauth_token がリクエストトークンと一致しません。")
            return None

        oauth_token_secret = self.request_token_content["oauth_token_secret"][0]
        token = oauth.Token(input_oauth_token, oauth_token_secret)
        client = oauth.Client(self.consumer, token)
        body = urllib.parse.urlencode({"oauth_verifier": oauth_verifier})
        resp, content = client.request(
            self.ACCESS_TOKEN_URL, "POST", body=body)
        return urllib.parse.parse_qs(content.decode())

    def _set_request_token_content(self):
        client = oauth.Client(self.consumer)
        resp, content = client.request(self.REQUEST_TOKEN_URL, "GET")
        self.request_token_content = urllib.parse.parse_qs(content.decode())


if __name__ == '__main__':
    # コンシューマキーとシークレットを入力
    CONSUMER_KEY = input('CONSUMER_KEY>>>')
    CONSUMER_SECRET = input('CONSUMER_SECRET>>>')

    # リクエストトークンを取得し、認証用URLを作成
    t = TwitterOauth(CONSUMER_KEY, CONSUMER_SECRET)
    authenticate_url = t.get_authenticate_url()
    print("\n以下のURLをブラウザで開いて認証してください:")
    print(authenticate_url)
    webbrowser.open(authenticate_url)

    print("\n認証後、TwitterのコールバックURLに付与された oauth_token と oauth_verifier をコピーしてください。")
    user_oauth_token = input("oauth_token >>> ")
    oauth_verifier = input("oauth_verifier >>> ")

    access_token_content = t.get_access_token_content(
        user_oauth_token, oauth_verifier)
    if access_token_content is None:
        print("アクセストークンの取得に失敗しました。")
    else:
        access_token = access_token_content["oauth_token"][0]
        access_token_secret = access_token_content["oauth_token_secret"][0]
        print("\nACCESS TOKEN        = {}".format(access_token))
        print("ACCESS TOKEN SECRET = {}".format(access_token_secret))
        print("認証完了")

    input("\nEnterキーで終了")
