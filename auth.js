import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ofmtqwwnhknnjpbddduj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_O-AwL40Ai_GDQgiRnSfmFw_j-FfpFZM";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// LOGIN
window.login = async function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginSenha").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Erro no login: " + error.message);
    return;
  }

  window.location.reload();
};

// CADASTRO
window.cadastrar = async function () {
  const nome = document.getElementById("cadNome").value;
  const email = document.getElementById("cadEmail").value;
  const telefone = document.getElementById("cadTelefone").value;
  const senha = document.getElementById("cadSenha").value;
  const codigo = document.getElementById("cadCodigo").value;

  if (codigo !== "2025v01.15.320012334") {
    alert("Código de convite inválido");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
    options: {
      data: {
        name: nome,
        phone: telefone
      }
    }
  });

  if (error) {
    alert("Erro no cadastro: " + error.message);
    return;
  }

  alert("Cadastro realizado! Faça login.");
};

// LOGOUT
window.logout = async function () {
  await supabase.auth.signOut();
  window.location.reload();
};

// SESSÃO
supabase.auth.getSession().then(({ data }) => {
  if (data.session) {
    document.getElementById("telaLogin").style.display = "none";
    document.getElementById("painelPrincipal").style.display = "block";

    const nome = data.session.user.user_metadata.name || "Usuário";
    document.getElementById("saudacao").innerText = `Olá, ${nome.split(" ")[0]}`;
  }
});
