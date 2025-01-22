module.exports = async (client) => {

    console.log(`Logged into ${client.user.username}!`);
    console.log(`\nClient {\n User ID: "${client.user.id}"\n Username: "${client.user.username}"\n Display Name: "${client.user.displayName}"\n}\n\n---`);

};