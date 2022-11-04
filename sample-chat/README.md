# Running the demo
## Step 1. Download the source code
```
# Run the code in CLI
$ git clone git@github.com:jiushu531/circlerich-chat-uikit-react.git
# Go to the project
$ cd circlerich-chat-uikit-react/sample-chat
# Install dependencies of the demo
$ npm install
```
## Step 2. Initialize the demo
1. Open the project, and find the `GenerateTestUserSig.js` file via the path `/src/debug/GenerateTestUserSig.js`.
2. Set required parameters in the `GenerateTestUserSig` file, where `SDKAppID` and `Key` can be obtained in the IM console. Click the target app card to go to its basic configuration page.
![](https://qcloudimg.tencent-cloud.cn/raw/8d469e975f1ca5a2f3dbc9c6fe8774f5.png)
3. In the **Basic Information** area, click **Display key**, and copy and save the key information to the `GenerateTestUserSig` file.
> In this document, the method to obtain `UserSig` is
> to configure a `SECRETKEY` in the client code. 
> In this method, the `SECRETKEY` is vulnerable to 
> decompilation and reverse engineering. Once 
> your `SECRETKEY` is disclosed, attackers 
> can steal your Tencent Cloud traffic. Therefore,
> **this method is only suitable for locally running 
> a demo project and feature debugging.** The correct 
> `UserSig` distribution method is to integrate the
> calculation code of `UserSig` into your server and 
> provide an application-oriented API. When `UserSig`
> is needed, your application can send a request 
> to the business server for a dynamic `UserSig`. 
> For more information, see the "Calculating UserSig 
> on the Server" section of [Generating UserSig]().

## Step 3. Launch the project
```
# Launch the project
$ npm run start
```
