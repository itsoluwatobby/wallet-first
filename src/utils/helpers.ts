
type ValueObj = {
  [index: string]: string | number | Date,
  value: number,
}
class Helper {
  public reduceTextLength(content: string, maxLength=20, option:('letter'|'word')='letter') {
    let responseOutput = '';
    if(option === 'letter'){
      responseOutput = content?.length > maxLength ? content?.substring(0, maxLength) +'...' : content
    }
    else if(option === 'word'){
      responseOutput = content?.split(' ')?.length > maxLength ? content?.substring(0, maxLength * 4) +'...' : content
    }
    return responseOutput
  }

  public getFirstLetter(name: string) {
    return name[0].toUpperCase();
  }

  public getCurrentDate() {
    return new Intl.DateTimeFormat('en', {
      dateStyle: 'full'
    }).format(new Date());
  }
  
  public getFullName(user: { [x:string]: string | null, firstName: string, lastName: string }) {
    return user.firstName + ' ' + user.lastName
  }

  public maskCardNumber(cardNumber: string) {
    const masked = cardNumber.substring(0,14).replaceAll(/[0-9]/g, '*');

    return masked + cardNumber.substring(14);
  }

  public formatTime(date: string, includeTime = false) {
    return new Intl.DateTimeFormat('en', {
      dateStyle: 'long',
      timeStyle: includeTime ? 'long' : undefined,
    }).format(new Date(date));
  }

  public formatPrice(price:number=0, decimalPlace=0) {
    return price.toFixed(decimalPlace).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  public totalAmount(account: ValueObj[]) {
    return this.formatPrice(account.reduce((acc, init) => acc + init.value, 0), 2);
  }

  jsonParseValue = <T>(value: string): T => {
    try {
      return JSON.parse(value) as T;
    } catch(err) {
      void(err);
      return value as T;
    }
  }

  getToken() {
    return window.localStorage.getItem('wallet_token') as string;
  }
}
export const helper = new Helper();
