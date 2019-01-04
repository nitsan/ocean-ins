export class UserAgentService {

  constructor() {
  }

  private static isAndroid(): boolean {
    return !!navigator.userAgent.match(/Android/i);
  }

  private static isBlackBerry(): boolean {
    return !!navigator.userAgent.match(/BlackBerry/i);
  }

  private static isIos(): boolean {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }

  private static isOpera(): boolean {
    return !!navigator.userAgent.match(/Opera Mini/i);
  }

  private static isWindows(): boolean {
    return !!navigator.userAgent.match(/IEMobile/i);
  }

  static isMobile(): boolean {
    return (UserAgentService.isAndroid() || UserAgentService.isBlackBerry() || UserAgentService.isIos() ||
      UserAgentService.isOpera() || UserAgentService.isWindows());
  }
}
