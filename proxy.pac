//Header
function FindProxyForURL(url, host) {
  if (localHostOrDomainIs(host, "localhost") ||

		//URL Domain List
                dnsDomainIs(host, "adobe.co.jp") ||
                dnsDomainIs(host, "adobe.com") ||
                dnsDomainIs(host, "digi-c.com") ||
                dnsDomainIs(host, "digi-c.co.jp") ||
                dnsDomainIs(host, "edu.yahoo.co.jp") ||
                dnsDomainIs(host, "macromedia.com") ||
                dnsDomainIs(host, "microsoft.com") ||
                dnsDomainIs(host, "mxmacromedia.112.2o7.net") ||
                dnsDomainIs(host, "services.wmdrm.windowsmedia.com") ||
                dnsDomainIs(host, "symantec.com") ||
                dnsDomainIs(host, "symantec.co.jp") ||
                dnsDomainIs(host, "symantecliveupdate.com") ||
                dnsDomainIs(host, "time.ne.jp") ||
                dnsDomainIs(host, "toshin.com") ||
                dnsDomainIs(host, "toshin.webex.com") ||
                dnsDomainIs(host, "toshin.pluginfree.com") ||
                dnsDomainIs(host, "windowsupdate.com") ||
                dnsDomainIs(host, "ad.goo.ne.jp") ||
                dnsDomainIs(host, "log000.goo.ne.jp") ||
                dnsDomainIs(host, "spd000.goo.ne.jp") ||
                dnsDomainIs(host, "wsj.net") ||
                dnsDomainIs(host, "marketwatch.com") ||
                dnsDomainIs(host, "omniture.com") ||
                dnsDomainIs(host, "google-analytics.com") ||
                dnsDomainIs(host, "morningstar.co.jp") ||
                dnsDomainIs(host, "dowjones.com") ||
                dnsDomainIs(host, "wsj.com") ||
                dnsDomainIs(host, "nagase.wmod.llnwd.net") ||
                dnsDomainIs(host, "nyushimondai.com") ||
                dnsDomainIs(host, "yotsuyaotsuka.com") ||
                dnsDomainIs(host, "yotsuyaotsuka.net") ||
                dnsDomainIs(host, "yotsuya-otsuka.co.jp") ||
                dnsDomainIs(host, "itoman.com") ||
                dnsDomainIs(host, "twofourdigital.net") ||
                dnsDomainIs(host, "toshin.ac.jp") ||
                dnsDomainIs(host, "nagasebros.com") ||
                dnsDomainIs(host, "musen-lan.com") ||
                dnsDomainIs(host, "eleutian.com") ||
                dnsDomainIs(host, "toshin.com.edgesuite.net") ||
                dnsDomainIs(host, "verisign.com") ||
                dnsDomainIs(host, "secomtrust.net") ||
                dnsDomainIs(host, "dev.ichibel.biz") ||
                dnsDomainIs(host, "engine-veronica.ichibel.biz") ||
                dnsDomainIs(host, "wasedajuku.com") ||
                dnsDomainIs(host, "cloudapp.net") ||
                dnsDomainIs(host, "speaking-partner.com") ||
                dnsDomainIs(host, "ichibel.pw") ||
                dnsDomainIs(host, "zoom.us") ||
                dnsDomainIs(host, "senseofwonder.ai") ||
                dnsDomainIs(host, "eset.com") ||
                dnsDomainIs(host, "toshin.seiseki.jp") ||
                dnsDomainIs(host, "moshi.toshin.com") ||
                dnsDomainIs(host, "toitsutest-koukou.com") ||
                dnsDomainIs(host, "codemonkey.com") ||
                dnsDomainIs(host, "cloudfront.net") ||
                dnsDomainIs(host, "gstatic.com") ||
                dnsDomainIs(host, "toshin-moshi.com") ||
                dnsDomainIs(host, "www.google.com/dl/*") ||
                dnsDomainIs(host, "google.com/dl/*") ||
                dnsDomainIs(host, "*.gvt1.com") ||
                dnsDomainIs(host, "tools.google.com/service/update2") ||
                dnsDomainIs(host, "dl.google.com/*") ||
                dnsDomainIs(host, "clients2.google.com") ||
                dnsDomainIs(host, "update.googleapis.com/service/update2") ||
                dnsDomainIs(host, "clients4.google.com") ||
                dnsDomainIs(host, "https://m.google.com/devicemanagement/data/api") ||
                dnsDomainIs(host, "mobile.l.google.com") ||
                dnsDomainIs(host, "accounts.google.com") ||
                dnsDomainIs(host, "www.google.com") ||
                dnsDomainIs(host, "docs.google.com") ||
                dnsDomainIs(host, "classroom.google.com") ||
                dnsDomainIs(host, "mail.google.com") ||
                dnsDomainIs(host, "ogs.google.com") ||
                dnsDomainIs(host, "www.toshin-kakomon.com") ||
                dnsDomainIs(host, "drive.google.com") ||
                dnsDomainIs(host, "chatgpt.com") ||


		//IP Address List
                isInNet(host, "202.228.187.202", "255.255.255.255") ||
                isInNet(host, "27.110.35.148", "255.255.255.255") ||
                isInNet(host, "27.110.35.129", "255.255.255.255") ||
                isInNet(host, "27.110.35.128", "255.255.255.128") ||

		//Local Network
                isInNet(host, "192.168.0.0", "255.255.0.0") ||
                isInNet(host, "172.16.0.0", "255.240.0.0") ||
                isInNet(host, "10.0.0.0", "255.0.0.0")

//Footer
     ) {
    return "DIRECT";
  } else {
  return "PROXY 27.110.35.207:8080";
  }
}
