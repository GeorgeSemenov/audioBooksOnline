export default function setCookie(
  cookieName: string,
  cookieValue: string,
  cookieProps?: string
): void {
  document.cookie =
    `${cookieName} = ${cookieValue}` + (cookieProps ? `; ${cookieProps}` : "");
}
