import closest from "./closest";
import "../Element.prototype.matches/index";

if (typeof window != "undefined" && window.Element && !Element.prototype.closest) {
    Element.prototype.closest = closest;
}
