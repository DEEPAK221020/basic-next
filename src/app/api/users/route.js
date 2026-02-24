export async function GET(){
    const data = {
        name : 'deepak',
        company : 'google'
    }
    return Response.json(data);
}