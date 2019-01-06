(function(window) {
	//百度偏移量
	var offset = 10;
	window.trans = {
		/**
		 * 利用百度翻译将英文翻译成中文(需要使用jquery)
		 * text   				需要翻译的文本
		 * callback(data,src)	回调函数
		 * 			data: 解析后的信息(JSON对象)
		 * 				content:翻译的内容
		 * 				success:是否请求成功
		 * 				msg:请求失败时的消息
		 * 			src: 百度请求返回的JSON对象
		 */
		baidu: function(text, callback) {
			// var nt = "1.10.2",
			// jQueryPre = (nt + Math.random()).replace(/\D/g, ""),
			var	timestamp = (new Date()).getTime(),
				url = "https://sp1.baidu.com/5b11fzupBgM18t7jm9iCKT-xh_/sensearch/selecttext";
			// url += "?cb=jQuery" + jQueryPre + "_" + timestamp;
			url += "?q=" + text.trim();
			url += "&_=" + (parseInt(timestamp) + offset++);
			$.ajax({
				type: "GET",
				url: url,
				dataType: "jsonp",
				jsonp: "cb",
				success: function(response) {
					var res = {};
					if(response.errno == 0){
						res.success = true;
						res.content = "";
						if(typeof(response.data.result) == "string"){
							res.content = response.data.result;
						}else{
							for(var t = 0, l=response.data.result.length; t<l; t++){
								var e = response.data.result[t];
								if(e["pre"] != null){
									res.content = e["pre"];
								}
								res.content += e["cont"] + "\r\n";
							}
						}
						callback.call(window, res, response);
					}else{
						res.msg = "百度请求失败";
						res.success = false;
						callback.call(window, res);
					}
					
				},
				error: function() {
					var res = {};
					res.msg = "百度请求失败";
					res.success = false;
					callback.call(window, res);
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
		google: function(text, callback) {
			var d = "en",
				languageArray = ["zh-CN", "zh", "en"],
				lang = "zh-CN",
				operation = "bubble"; //"icon"
			var qh = function(a) {
					a = String(a).toLowerCase().replace("_", "-");
					if ("zh-cn" == a) return "zh-CN";
					if ("zh-tw" == a) return "zh-TW";
					var b = a.indexOf("-");
					a = 0 <= b ? a.substring(0, b) : a;
					return "zh" == a ? "zh-CN" : a
				},
				Rh = function(a) {
					if ("" != a.c) a = a.c;
					else a: {
						for (var b = 0; b < a.h.length; b++) {
							var c = qh(a.h[b]);
							if (a.b[c]) {
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
			if (!Uh(d)) {
				if ("zh" == d || "zh-Hant" == d) d = "zh-CN";
				var Vb = function(a) {
						return function() {
							return a
						}
					},
					Wb = function(a, b) {
						for (var c = 0; c < b.length - 2; c += 3) {
							var d = b.charAt(c + 2);
							d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
							d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
							a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
						}
						return a
					},
					Xb = null,
					Yb = function(a) {
						if (null !== Xb) var b = Xb;
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
						for (var e = [], f = 0, g = 0; g < a.length; g++) {
							var k = a.charCodeAt(g);
							128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 ==
									(a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >>
										18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k &
								63 | 128)
						}
						a = b;
						for (f = 0; f < e.length; f++) a += e[f], a = Wb(a, "+-a^+6");
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
				url += "&source=" + operation; //"icon"
				url += "&tk=" + Yb(text.trim());
				url += "&q=" + text.trim();

				httpRequest(url, function(responseText, status) {
					//createPop(analyzeGoogle(responseText), position);
					//解析数据
					var res = {};

					if (status == 200) {
						var val = JSON.parse(responseText);
						res.success = true;
						var t;
						
						if (val.dict) {
							res.content = "";
							for (t = 0, l = val.dict.length; t < l; t++) {
								var e = {};
								e["pre"] = val.dict[t].pos;
								e["cont"] = val.dict[t].terms.join(", ");
								// res.content.push(e);
								res.content += e["pre"] + ":" + e["cont"] + ";\r\n";
							}
						} else {
							res.content = "";
							for (t = 0, l = val.sentences.length; t < l; t++) {
								res.content += val.sentences[t].trans + "\r\n";
							}
						}
						callback.call(window, res, val);
					} else {
						res.msg = "Google请求失败";
						res.success = false;
						callback.call(window, res);
					}

				});
			}
		},
	}

	function httpRequest(url, callback) {
		var xhr = GetXmlHttpObject();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				callback(xhr.responseText, xhr.status);
			}
		}
		xhr.send();
	}

	function GetXmlHttpObject() {
		var xmlHttp = null;
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			try {
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return xmlHttp;
	}
}(typeof window !== "undefined" ? window : this));
