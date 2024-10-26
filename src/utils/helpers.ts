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

  public formatPrice(price:number=0, decimalPlace=0) {
    return price.toFixed(decimalPlace).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
