export async function GET(){
    return Response.json({
        message: "User fetched successfully",
        users:['john','pawn']
    })
}

export async function POST(request){
   const body = await request.json();
    return Response.json({
        message:"User created successfully",
        data : body
    })
}