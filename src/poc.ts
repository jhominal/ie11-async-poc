let hello: string = "hello!";

console.log(hello);

async function getGoogleStatus() : Promise<number> {
    let response = await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available");
    return response.status;
}

async function printGoogleStatus() {
    let status: number = await getGoogleStatus();
    console.log(status);
}

printGoogleStatus();