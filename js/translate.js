(function(window) {
	//alert(1);
	//百度偏移量
	var offset = 10;
	window.trans = {
		/**
		 * 利用百度翻译将英文翻译成中文
		 * text   				需要翻译的文本
		 * callback(data,src)	回调函数
		 * 			data: 解析后的信息(JSON对象)
		 * 				content:翻译的内容
		 * 				success:是否请求成功
		 * 				msg:请求失败时的消息
		 * 			src: google请求返回的JSON对象
		 */
		baidu: function(text, callback) {
			console.log(offset);
			var jQueryPre = ("1.10.2" + Math.random()).replace(/\D/g, ""),
				timestamp = (new Date()).getTime(),
				url = "https://sp1.baidu.com/5b11fzupBgM18t7jm9iCKT-xh_/sensearch/selecttext";
			url += "?cb=jQuery" + jQueryPre + "_" + timestamp;
			url += "&q=" + text.trim();
			url += "&_=" + (parseInt(timestamp) + offset++);
			httpRequest(url, function(responseText, status) {
				var res = {};
				if(status == 200){
					res.success = true;
					let start = responseText.indexOf("(");
					let end = responseText.lastIndexOf(")");
					responseText = JSON.parse(unescape(responseText.substring(start + 1, end).replace(/\\/g, '%')));
				}else{
					res.msg = "百度请求失败";
					res.success = false;
				}
			});
		},
		/**
		 * 利用google翻译将英文翻译成中文
		 * text   				需要翻译的文本
		 * callback(data,src)	回调函数
		 * 			data: 解析后的信息(JSON对象)
		 * 				content:翻译的内容
		 * 				success:是否请求成功
		 * 				msg:请求失败时的消息
		 * 			src: google请求返回的JSON对象
		 */
		google: function(text, callback){
			var d = "en",
			    languageArray = ["zh-CN","zh","en"],
				lang = "zh-CN",
				operation = "bubble";//"icon"
			var qh = function(a) {
					a = String(a).toLowerCase().replace("_", "-");
					if("zh-cn" == a) return "zh-CN";
					if("zh-tw" == a) return "zh-TW";
					var b = a.indexOf("-");
					a = 0 <= b ? a.substring(0, b) : a;
					return "zh" == a ? "zh-CN" : a
				},
				Rh = function(a) {
					if("" != a.c) a = a.c;
					else a: {
						for(var b = 0; b < a.h.length; b++) {
							var c = qh(a.h[b]);
							if(a.b[c]) {
								a = c;
								break a
							}
						}
						a = "en"
					}
					return a
				},
				Uh = function(a) {
					var b = function(a) {
						this.h = languageArray;
						this.c = "";
						this.a = "1";
						this.i = !0;
						this.b = [];
						this.j = [];
						this.u = !!a;
					};
					a = qh(a);
					return a == Rh(b) ? !0 : !1
				};
			if(!Uh(d)) {
				if("zh" == d || "zh-Hant" == d) d = "zh-CN";
				var Vb = function(a) {
						return function() {
							return a
						}
					},
					Wb = function(a, b) {
						for(var c = 0; c < b.length - 2; c += 3) {
							var d = b.charAt(c + 2);
							d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
							d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
							a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
						}
						return a
					},
					Xb = null,
					Yb = function(a) {
						if(null !== Xb) var b = Xb;
						else {
							b = Vb(String.fromCharCode(84));
							var c = Vb(String.fromCharCode(75));
							b = [b(), b()];
							b[1] = c();
							b = (Xb = window[b.join(c())] || "") || ""
						}
						var d = Vb(String.fromCharCode(116));
						c = Vb(String.fromCharCode(107));
						d = [d(), d()];
						d[1] = c();
						c = "&" + d.join("") +
							"=";
						d = b.split(".");
						b = Number(d[0]) || 0;
						for(var e = [], f = 0, g = 0; g < a.length; g++) {
							var k = a.charCodeAt(g);
							128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >> 18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k & 63 | 128)
						}
						a = b;
						for(f = 0; f < e.length; f++) a += e[f], a = Wb(a, "+-a^+6");
						a = Wb(a, "+-3^+b+-f");
						a ^= Number(d[1]) || 0;
						0 > a && (a = (a & 2147483647) + 2147483648);
						a %= 1E6;
						return c + (a.toString() + "." +
							(a ^ b))
					};
				var url = "https://translate.googleapis.com/translate_a/single";
				url += "?client=gtx";
				d = d ? d : "auto";
				url += "&sl=" + d;
				url += "&tl=" + languageArray[0];
				url += "&hl=" + lang;
				url += "&dt=t";
				url += "&dt=bd";
				url += "&dj=1";
				url += "&source=" + operation;//"icon"
				url += "&tk=" + Yb(text.trim());
				url += "&q=" + text.trim();				
				
				httpRequest(url, function(responseText, status) {
					//createPop(analyzeGoogle(responseText), position);
					//解析数据
					var res = {};
					
					if(status == 200){
						var val = JSON.parse(responseText);
						res.success = true;
						var t;
						if(val.dict){
							res.content = [];
							for(t = 0, l=val.dict.length; t<l; t++){
								var e = {};
								e["pre"] = val.dict[t].pos;
								e["cont"] = val.dict[t].terms.join(" ");
								res.content.push(e);
							}
						}else{
							res.content = "";
							for(t = 0, l=val.sentences.length; t<l; t++){
								res.content +=val.sentences[t].trans + "\r\n";
							}
						}
						callback.call(window, res, val);
					}else{
						res.msg = "Google请求失败";
						res.success = false;
						callback.call(window, res);
					}
					
				});
			}
		}
	}
	
	var requestHeader = {
		// "Access-Control-Allow-Origin" : "*"
	}
	function httpRequest(url, callback) {
		var xhr = GetXmlHttpObject();
		xhr.open("GET", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
		Object.keys(requestHeader).forEach(function(key){
			 xhr.setRequestHeader(key, requestHeader[key]);
		});
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				callback(xhr.responseText, xhr.status);
			}
		}
		var jsonp = "";
		xhr.send();
	}
	function GetXmlHttpObject() {
		var xmlHttp = null;
		try {
			// Firefox, Opera 8.0+, Safari
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			// Internet Explorer
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return xmlHttp;
	}
}(typeof window !== "undefined" ? window : this));
