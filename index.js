const express = require('express')
const cors = require('cors')
const app = express()
let mysql = require("mysql")

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Base de donnees connectee')
})

app.listen(process.env.PORT || 3001)

app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ndzon'
})



con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('connexion établie');
    }
})

// Lister les categories de maison


app.get('/categories', (req, res)=>{
    
    con.query('SELECT * FROM categories',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})

// Lister les maisons
app.get('/maisons', (req, res)=>{
    
    con.query('SELECT * FROM maisons',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les quartiers
app.get('/quartiers', (req, res)=>{
    
    con.query('SELECT * FROM quartiers',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})

// Lister les proprietaires

app.get('/proprietaires', (req, res)=>{
    
    con.query('SELECT * FROM proprietaires',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})

// Ajouter un categorie;
app.post('/ajout/categorie', (req, res)=>{

    const id_categorie = req.body.id_classe;
    const categorie = req.body.categorie;
    
    con.query('INSERT INTO categories VALUES(NULL,?)',[categorie],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
// Ajouter un quartier;
app.post('/ajout/quartier', (req, res)=>{

    const id_quartier = req.body.id_classe;
    const quartier = req.body.quartier;
    const image_quartier = req.body.image_quartier;
    
    con.query('INSERT INTO quartiers VALUES(NULL,?,?)',[quartier,image_quartier],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
// Ajouter une maison;
app.post('/ajout/maison', (req, res)=>{

    const id_maison = req.body.id_classe;
    const id_categorie = req.body.id_categorie;
    const id_quartier = req.body.id_quartier;
    const id_proprietaire = req.body.id_proprietaire;
    const prix = req.body.prix;
    const description = req.body.description;
    const nombre_chambre = req.body.nombre_chambre;
    const nombre_douche = req.body.nombre_douche;
    const nombre_salon = req.body.nombre_salon;
    const coordonnees = req.body.coordonnees;
    const telephone_proprietaire = req.body.telephone_proprietaire;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;
    const image4 = req.body.image4;
    const image5 = req.body.image5;
    
    con.query('INSERT INTO maisons VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[id_categorie,id_quartier,id_proprietaire,prix,description,nombre_chambre,nombre_douche,nombre_salon,coordonnees,telephone_proprietaire,image1,image2,image3,image4,image5],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})

// Ajouter un proprietaire;
app.post('/ajout/proprietaire', (req, res)=>{

    const id_proprietaire = req.body.id_classe;
    const nom_proprietaire = req.body.nom_proprietaire;
    const prenom_proprietaire = req.body.prenom_proprietaire;
    const email_proprietaire = req.body.email_proprietaire;
    const téléphone_proprietaire = req.body.téléphone_proprietaire;
    const password = req.body.password;
    
    con.query('INSERT INTO proprietaires VALUES(NULL,?,?,?,?,?)',[nom_proprietaire,prenom_proprietaire,email_proprietaire,téléphone_proprietaire,password],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})

// modifier une maison;
app.put('/modifier/maison/:id', (req, res)=>{

    const id_maison = req.body.id_classe;
    const id_categorie = req.body.id_categorie;
    const id_quartier = req.body.id_quartier;
    const id_proprietaire = req.body.id_proprietaire;
    const prix = req.body.prix;
    const description = req.body.description;
    const nombre_chambre = req.body.nombre_chambre;
    const nombre_douche = req.body.nombre_douche;
    const nombre_salon = req.body.nombre_salon;
    const coordonnees = req.body.coordonnees;
    const telephone_proprietaire = req.body.telephone_proprietaire;
    // const image1 = req.body.image1;
    // const image2 = req.body.image2;
    // const image3 = req.body.image3;
    // const image4 = req.body.image4;
    // const image5 = req.body.image5;
    con.query(`UPDATE maisons SET id_categorie = '2', id_quartier = '3', prix = '22222', description = 'bon bienbon', nombre_chambre = '1', nombre_douche = '2', nombre_salon = '2', telephone_proprietaire = '562565625688' WHERE id_maison =?`, [req.params.id],[id_categorie, id_quartier,prix, description, nombre_chambre, nombre_douche, nombre_salon, telephone_proprietaire],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('Status updated successfully');
    }
    })
})




app.get('/proprietaire/:id', (req, res)=>{
    
        con.query('SELECT * FROM proprietaires WHERE id_proprietaire=?',[req.params.id],(err,result)=>{
            if(err) res.status(500).send(err)
            
            res.status(200).json(result)
         })
     })
//Effacer une categorie
app.delete('/delete/categorie/:id', (req, res)=>{
    
    con.query('DELETE FROM categories WHERE id_categorie=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Effacer une maison
app.delete('/delete/maison/:id', (req, res)=>{
    
    con.query('DELETE FROM maisons WHERE id_maison=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Effacer un quartiers
app.delete('/delete/quartier /:id', (req, res)=>{
    
    con.query('DELETE FROM quartier s WHERE id_quartier =?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
