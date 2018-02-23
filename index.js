export default function openLinks(links = [], mode = '_blank') {
  links.forEach(link => window.open(link, mode));
}
