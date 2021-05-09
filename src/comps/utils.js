//separates the body styles between login and home page
export function svgLoginBodyStyle() {
    document.body.classList.add('loginBody');
}
export function clearSvgLoginBodyStyle() {
    document.body.classList.remove('loginBody');
}