const SUPABASE_URL = "https://ofmtqwwnhknnjpbddduj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_O-AwL40Ai_GDQgiRnSfmFw_j-FfpFZM";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

function showSignup() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("signup-box").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signup-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

async function signup() {
  alert("clicou em cadastrar"); // DEBUG

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!email || !password) {
    alert("Preencha email e senha");
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Conta criada! Faça login.");
    showLogin();
  }
}
