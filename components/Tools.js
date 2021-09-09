import React from "react";

export const openWebView = (navigation, url, title = undefined) => {
    navigation.navigate("WebViewCustom", {url: url, title: title})
}

