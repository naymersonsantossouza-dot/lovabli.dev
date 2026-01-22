const SUPABASE_URL = "https://ofmtqwwnhknnjpbddduj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_O-AwL40Ai_GDQgiRnSfmFw_j-FfpFZM";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!email || !password) {
    alert("Preencha email e senha");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Conta criada! Faça login.");
  }
}
