export default function (greeting: string): void {
  const h1 = window.document.getElementById('app')

  if (h1 !== null) {
    h1.textContent = greeting
  }
}
