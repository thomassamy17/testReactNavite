import React from "react";

export const openWebView = (navigation, url, title) => {
    navigation.navigate("WebViewCustom", {url: url, title: title})
}

