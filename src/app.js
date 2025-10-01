// Arrays base
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'us'];
let extensions = ['.com', '.net', '.us', '.io'];

// Domain generate
function generateDomains() {
  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(p + a + n + ext);

          // domain hack
          if (n.endsWith(ext.slice(1))) {
            let hacked = p + a + n.slice(0, -ext.length + 1) + ext;
            domains.push(hacked);
          }
        }
      }
    }
  }

  return domains;
}

// Insert HTML
window.onload = function() {
  let domainList = document.getElementById("domain-list");
  let domains = generateDomains();

  domains.forEach(domain => {
    let li = document.createElement("li");
    li.textContent = domain;
    domainList.appendChild(li);
  });
};
