function getBotResponse(input) {
    input=input.toLowerCase();
    if (input == "hello" ) {
        return "Hello there!";
    }else if (input == "how are you ?"){
        return "Fine";
    }else if (input == "Help" || input == "help"){
        return "Enter \"(College name) Info\" for info on college. Enter \"(College name) Admission\" for help with admission process ";
    }else if (input == "VIT Info" || input == "VIT info"){
        return "Info on vit :-";
    }else if (input == ("VIT Admission").toLowerCase()){      
        return "Select your VITEEE rank :-";
    }else if (input == "IIT Admission" || input == "iit admission"){  
        return "Select your JEE Advance rank :-";
    }else if (input == ("which engineering cources are offered in VIT ?").toLowerCase()){      
        return "Engineering cources in VIT are :- Computer Science Engineering, Electronics and Communication Engineering, Mechanical Engineering, Civil engineering, Electrical and Electronics Engineering and Fashion Technology";
    }else if (input == "What is average package in VIT ?"){      
        return "INR 8.19 LPA";
    }else if (input == ("What is average student teacher ratio in vit ?").toLowerCase()){      
        return "69:1";
    }else if (input == "What is scope for research in vit ?"){      
        return "VIT has very good labs which matches international standards which are pivotal for research.";
    }else if (input == "Vaṇakkam" ) {
        return "Vaṇakkam!";
    }else if (input == "Nīṅkaḷ eppaṭi irukkiṟīrkaḷ?"){
        return "Naṉṟāka";
    }else if (input == "Utavi" || input == "utavi"){
        return "Kallūri paṟṟiya takavalukku\"(kallūri peyar) takaval\" ai uḷḷiṭavum. Cērkkai ceyalmuṟaikkāṉa utavikku\"(kallūri peyar) cērkkai\" ai uḷḷiṭavum";
    }else if (input == "VIT takaval" || input == "VIT takaval"){
        return "Paṟṟiya takaval vit :-";
    }else if (input == "VIT Cērkkai" || input == "VIT cērkkai"){      
        return "Uṅkaḷ VITEEE tarattait tērnteṭukkavum:-";
    }else if (input == "IIT Cērkkai" || input == "IIT cērkkai"){      
        return "Uṅkaḷ JEE tarattait tērnteṭukkavum:";
    }else if (input == "VIT ententa poṟiyiyal paṭippukaḷ vaḻaṅkappaṭukiṉṟaṉa?"){      
        return "VIT uḷḷa poṟiyiyal paṭippukaḷ:- Kaṇiṉi aṟiviyal poṟiyiyal, miṉṉaṇuviyal maṟṟum takaval toṭarpup poṟiyiyal, iyantirap poṟiyiyal, kuṭimaip poṟiyiyal, miṉṉiyal maṟṟum miṉṉaṇuviyal poṟiyiyal maṟṟum pēṣaṉ ṭekṉālaji";
    }else {
        return "Vēṟu ētāvatu kēḷuṅkaḷ!";
    }
}