async function addFinance(title, amount) {  
  const user = (await supabase.auth.getUser()).data.user;  
  
  await supabase.from("finances").insert({  
    user_id: user.id,  
    title,  
    amount  
  });  
  
  loadFinances();  
}  
  
async function loadFinances() {  
  const user = (await supabase.auth.getUser()).data.user;  
  
  const { data } = await supabase  
    .from("finances")  
    .select("*")  
    .eq("user_id", user.id)  
    .order("created_at", { ascending: false });  
  
  console.log(data);  
