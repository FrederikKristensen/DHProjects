using System;

namespace DHProjects
{

public class WebShop
{

private int _id;
private string _titel;

private int _pris;

private string _beskrivelse;

public WebShop(){

}

public WebShop(int id, string titel, int pris, string beskrivelse){

    _id = id;
    _titel = titel;
    _pris = pris;
    _beskrivelse = beskrivelse;
}


public int id {get; set;}

public string titel {get; set;}

public int pris {get; set;}

public string beskrivelse {get; set;}

public override string ToString(){

return $"{nameof(id)}: {id}, {nameof(titel)}: {titel}, {nameof(pris)}: {pris}, {nameof(beskrivelse)}: {beskrivelse}";

}

}

}