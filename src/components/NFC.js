import React, {useEffect, useState} from "react";
import {Button, View, Text} from "react-native";
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import {openWebView} from "./Tools";

// Pre-step, call this before any NFC operations
async function initNfc() {
    await NfcManager.start();
}


const TestNFC = (props) => {

    const[text,setText] = useState("")

    function readNdef() {
        const cleanUp = () => {
            NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
            NfcManager.setEventListener(NfcEvents.SessionClosed, null);
        };

        return new Promise((resolve) => {
            let tagFound = null;

            NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
                tagFound = tag;
                resolve(tagFound);

                let sring = ""
                for (let i = tagFound.ndefMessage[0].payload[0] + 1; i < tagFound.ndefMessage[0].payload.length; i++) {
                    sring += String.fromCharCode(tagFound.ndefMessage[0].payload[i])
                }
                let title = ""
                if (tagFound.ndefMessage.length > 1) {
                    for (let i = tagFound.ndefMessage[1].payload[0] + 1; i < tagFound.ndefMessage[1].payload.length; i++) {
                        title += String.fromCharCode(tagFound.ndefMessage[1].payload[i])
                    }
                }
                try {
                    new URL(sring);
                    openWebView(props.navigation, sring, title)
                } catch (_) {
                    setText(sring)
                }
                NfcManager.unregisterTagEvent().catch(() => 0);
            });

            NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
                cleanUp();
                if (!tagFound) {
                    resolve();
                }
            });

            NfcManager.registerTagEvent();
        });
    }

    useEffect(() => {
        initNfc()
    })

    return (
        <View>
            <Button title={"test"} onPress={readNdef}/>
            <Text>{text}</Text>
        </View>
    )
}

export default TestNFC
