function FindProxyForURL(url, host) {
    // ワイルドカードを使用してブロックしたいドメインパターンを指定
    if (shExpMatch(host, "www.youtube.com") ||
        shExpMatch(host, "x.com") ||
        shExpMatch(host, "*.ad-server.net")) {
        // パターンに一致した場合、存在しないプロキシに転送してアクセスをブロック
        return "PROXY 127.0.0.1:65535";
    }

    // 上記のいずれにも一致しない場合は、直接接続を許可
    return "DIRECT";
}
