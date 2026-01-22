const SUPABASE_URL = "https://ofmtqwwnhknnjpbddduj.supabase.co";  
const SUPABASE_ANON_KEY = "sb_publishable_O-AwL40Ai_GDQgiRnSfmFw_j-FfpFZM";  
  
const supabase = supabase.createClient(  
  SUPABASE_URL,  
  SUPABASE_ANON_KEY  
);  
  
// LOGIN  
async function login(email, password) {  
  const { error } = await supabase.auth.signInWithPassword({  
    email,  
    password,  
  });  
  if (error) alert(error.message);  
}  
  
// CADASTRO  
async function signup(email, password) {  
  const { error } = await supabase.auth.signUp({  
    email,  
    password,  
  });  
  if (error) alert(error.message);  
}  
  
// LOGOUT  
async function logout() {  
  await supabase.auth.signOut();  
}
