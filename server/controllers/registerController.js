const model = require('../models/registerModel')

const setData = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new model({
        name,
        email,
        password
    });
    newUser.save().then(() => {
        res.json('user created');
    }).catch(err => {
        res.json('error')
    });
};

const getdata = (req, res) => {
    const email = req.params.email;
    model.findOne({email:email}).then(user=>{
        res.json(user);
    }).catch(err=>{
        res.json(`error ${err}`)
    })
};



const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    model.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send(`user logged in, Mr.${user.name}`);
            }
            else {
                res.send('wrong credentials');
            }
        }
        else {
            res.send('no register');
        }
    })

};

module.exports =
{
    setData,
    login,
    getdata,
}