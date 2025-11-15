function FindProxyForURL(url, host) {

    // --- ブラックリスト ---
    // ここにブロックしたいドメインを追加してください。
    // "example.com" と書けば "www.example.com" も対象になります。
    var blocked_hosts = [
        "www.youtube.com",
        "x.com",
        "twitter.com"
    ];

    // ブラックリスト内のドメインと一致するかチェック
    for (var i = 0; i < blocked_hosts.length; i++) {
        if (dnsDomainIs(host, blocked_hosts[i])) {
            // 一致した場合、存在しないプロキシに転送してアクセスをブロック
            return "PROXY 127.0.0.1:65535";
        }
    }

    // ブラックリストにない場合は、プロキシを使わず直接接続
    return "DIRECT";
}
