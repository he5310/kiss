declare var ApiUrl: string;
declare var token: string;
declare namespace myLib {
	function makeGreeting(s: string): string;
	let numberOfGreetings: number;
}

declare var notificactions: string[];

export {
	ApiUrl,
	token,
	myLib,
	notificactions
}
