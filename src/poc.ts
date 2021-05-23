let hello: string = "hello!";

console.log(hello);

async function getGoogleStatus() : Promise<number> {
    let response = await fetch("https://www.google.com");
    return response.status;
}

async function printGoogleStatus() {
    let status: number = await getGoogleStatus();
    console.log(status);
}

printGoogleStatus();