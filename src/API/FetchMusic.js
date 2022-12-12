
export const fetchMusic = async (url) => {
<<<<<<< HEAD
  try {
    const response = await fetch(url);
    console.log("conexion exitosa");
    return await response.json();
  } catch (error) {
    console.log("error");
  }
};
=======
            try{
                const response = await fetch(url);
                /* console.log("conexion exitosa"); */
                return await response.json();
            } catch (error) {
                console.log("error")
            }
        };
>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae
