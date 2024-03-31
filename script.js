// Função para rolagem suave ao clicar nos links de navegação
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Função para exibir animação ao rolar a página
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
};

const fadeElements = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(observerCallback, observerOptions);

fadeElements.forEach(element => {
  observer.observe(element);
});
const typedText = document.querySelector(".typed-text");
const text = "Tenho experiência como supervisor de elétrica e eletrotécnico, responsável por gerenciar equipes e projetos nessas áreas, além de análise e desenvolvimento de sistemas. Planejo, organizo e lidero equipes, garantindo conformidade com normas, segurança, qualidade e prazos. Também defino arquiteturas, plataformas e linguagens de desenvolvimento, e oriento e treino equipes para melhorar continuamente os processos e entregar projetos com excelência.";

function typeWriter() {
  let i = 0;
  const speed = 50; // Velocidade da animação (em milissegundos)

  function typeText() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, speed);
    } else {
      // Resetar o cursor piscante depois de terminar a animação
      typedText.classList.remove("blink-caret");
    }
  }

  typeText();
}

window.addEventListener("load", typeWriter);
const formContato = document.getElementById('form-contato');
const seuEmail = 'iago.henrique099@gmail.com'; // Substitua pelo seu endereço de e-mail

formContato.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Cria um objeto com os dados do formulário
  const dados = {
    nome,
    email,
    mensagem
  };

  // Envia os dados para seu e-mail
  enviarEmail(seuEmail, 'Novo contato do portfólio', JSON.stringify(dados));
});

function enviarEmail(destinatario, assunto, corpo) {
  const link = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  window.open(link);
}
const redesIcones = document.querySelectorAll('.redes-lista a');

function animarIcones() {
  redesIcones.forEach((icone, index) => {
    setTimeout(() => {
      icone.style.animation = 'flutuar 2s ease-in-out infinite';
    }, index * 200); // Atraso de 200ms entre cada ícone
  });
}

window.addEventListener('load', animarIcones);