 //fuction computer
function getpilihanComputer(){
   
  const computer = Math.random()

   if (computer < 0.34) return 'gunting'
   if(computer >= 0.34 && computer< 0.67) return'batu';
    return 'kertas';
}

//fuction hasil
function getHasil(computer, player){
   
    if (player == computer) return 'SERI!'

    if (player == 'gunting') return (computer == 'batu') ? 'LOSE!' : 'WIN!';

    if (player == 'batu') return (computer == 'gunting') ? 'WIN!' : 'LOSE!';

    if (player == 'kertas') return (computer == 'batu') ? 'WIN!' : 'LOSE!';
     
}
//tanda ? = true dan tanda : = false

function rotate(){
    const imgComputer = document.querySelector('.computer')
    const image = ['batu','gunting', 'kertas']
    let i = 0
    const waktuStart = new Date().getTime()

    // setInterval untuk fungsi melakukan sesuatu selama berulang2 sesuai ketentuan waktu
    setInterval(function(){
       if(new Date().getTime() - waktuStart > 1000 ){
           clearInterval
           return;
       }

       imgComputer.setAttribute('src', 'myImage/' + image[i++] + '.png')
       if(i == image.length) i = 0

    }, 100)
}


const choose = document.querySelectorAll('li img')
console.log(choose)
//pengulangan untuk pilihan img gunting batu kertas
choose.forEach(function(pilihan){
    pilihan.addEventListener('click', function(){
        const pilihanComputer = getpilihanComputer()
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        const vs = document.querySelector('.VS')

        //fucntion buat putar2 saat komputer proses suit
        rotate();

        setTimeout(function(){
            const imgComputer = document.querySelector('.computer')
        
            //biar komputernya bisa berubah2 gambar sesuai AI nya
       imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')
       
            //menampikan tulisan hasil 
       vs.innerHTML = hasil 
        }, 1000)

      
    })
})

























// const rock = document.querySelector('.batu')
// const scisor = document.querySelector('.gunting')
// const paper = document.querySelector('.kertas')
// const vs = document.querySelector('.VS')

// //fuction batu
// rock.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = rock.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })
// //fuction gunting
// scisor.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = scisor.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })

// //fuction kertas
// paper.addEventListener('click', function(){
//      const pilihanComputer = getpilihanComputer()
//      const pilihanPlayer = paper.className;
//      const hasil = getHasil(pilihanComputer, pilihanPlayer)
//      const imgComputer = document.querySelector('.computer')

//      //biar komputernya bisa berubah2 gambar sesuai AI nya
//      imgComputer.setAttribute('src', 'myImage/' + pilihanComputer + '.png')

//      //menampikan tulisan hasil 
//      vs.innerHTML = hasil 

//      console.log('computer: '+ pilihanComputer)
//      console.log('player: '+ pilihanPlayer)
//      console.log('hasil: '+ hasil)

// })








 

