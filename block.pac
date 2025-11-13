function FindProxyForURL(url, host) {
    // ブロックしたいドメインのリスト（ここを編集してください）
    var blockedDomains = [
        "example.com",
        "block-site.org",
        "sub.another-domain.net"
    ];

    // アクセス先のホストがブロックリストに含まれるかチェック
    for (var i = 0; i < blockedDomains.length; i++) {
        if (dnsDomainIs(host, blockedDomains[i])) {
            // ブロック対象の場合、存在しないプロキシに転送してアクセスを失敗させる
            return "PROXY 127.0.0.1:65535";
        }
    }

    // ブロック対象でない場合は、プロキシを使わず直接接続
    return "DIRECT";
}
