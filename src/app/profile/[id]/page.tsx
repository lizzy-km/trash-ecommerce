
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  // read route params
  const id = params.id
 
 
  
  return {
    title: id
    
  }
}
 

export default function UserProfile ({ params, searchParams }: Props) {



    return(
        <div 
        className=" flex flex-col justify-center items-center p-[1rem] min-h-screen overflow-y-auto "
         >
            <h1 className="text-center">Profile Page {params.id} </h1>
        </div>

    )
}

      
