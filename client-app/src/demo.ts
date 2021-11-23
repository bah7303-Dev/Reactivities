
 export  interface  Duck {
    name: string;
    numlegs : number;
    makeSound:  (sound: string) => void;

}

const duck1: Duck= { name: 'huey',
                     numlegs: 2,
                    makeSound:  (sound: any) => {  
                        console.log(sound)
}

}



const duck2: Duck = { name: 'dewey'
, numlegs: 2,
makeSound:  (sound: any) => {  
    console.log(sound)
}

}

export const ducks = [duck1, duck2];