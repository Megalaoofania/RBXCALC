
function nvidia()
{
    document.getElementById("nvidia").style.backgroundColor = "#76B900"
    document.getElementById("nvidia").style.color = "white"
    document.getElementById("nvidiaList").hidden = false
    document.getElementById("amdList").hidden = true
}
function amd()
{
    document.getElementById("nvidia").style.backgroundColor = "white"
    document.getElementById("nvidia").style.color = "black"
    document.getElementById("amd").style.backgroundColor = "#ED1C24"
    document.getElementById("amd").style.color = "white"
    document.getElementById("nvidiaList").hidden = true
    document.getElementById("amdList").hidden = false
}

function earningsNVIDIA()
{
    var value = document.getElementById("nList").value
    console.log(value)
    var slider = document.getElementById("time").value
    console.log(slider)
    var base
    var hour = document.getElementById("hour")
    var day = document.getElementById("day")
    var month = document.getElementById("month")
    if(slider == "1")
    {
        document.getElementById("range").innerText = slider + " hour"
    }
    else
    {
        document.getElementById("range").innerText = slider + " hours"
    }
    if(value == "1060")
    {
        base = 19.44/(24/slider)
        hour.innerText = 19.44/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "1070")
    {
        base = 14.4/(24/slider)
        hour.innerText = 14.4/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "1650")
    {
        base = 14.4/(24/slider)
        hour.innerText = 14.4/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false

    }
    else if(value == "1650MaxQ")
    {
        base = 5.76/(24/slider)
        hour.innerText = 5.76/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "1660")
    {
        base = 28.8/(24/slider)
        hour.innerText = 28.8/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "1660Ti")
    {
        base = 10.8/(24/slider)
        hour.innerText = 10.8/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "1660Super")
    {
        base = 20.88/(24/slider)
        hour.innerText = 20.88/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "2060")
    {
        base = 17.28/(24/slider)
        hour.innerText = 17.28/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "2070Super")
    {
        base = 46.08/(24/slider)
        hour.innerText = 46.08/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3050Laptop")
    {
        base = 10/(24/slider)
        hour.innerText = 10/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3060")
    {
        base = 65.27/(24/slider)
        hour.innerText = 65.27/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3060Laptop")
    {
        base = 14.4/(24/slider)
        hour.innerText = 14.4/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3060Ti")
    {
        base = 38.37/(24/slider)
        hour.innerText = 38.37/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3070")
    {
        base = 70.79/(24/slider)
        hour.innerText = 70.79/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3070Ti")
    {
        base = 36.25/(24/slider)
        hour.innerText = 36.25/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3080")
    {
        base = 64.08/(24/slider)
        hour.innerText = 64.08/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "3080Ti")
    {
        base = 84.24/(24/slider)
        hour.innerText = 64.08/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"

        document.getElementById("earnings").hidden = false
    }
    else if(value == "3090")
    {
        base = 46.08/(24/slider)
        hour.innerText = 46.08/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "4080")
    {
        base = 78.12/(24/slider)
        hour.innerText = 78.12/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
    else if(value == "4090")
    {
        base = 162.11/(24/slider)
        hour.innerText = 162.11/24 + "R$/hour"
        day.innerText = base + "R$/day"
        month.innerText = base*30 + "R$/month"
        document.getElementById("earnings").hidden = false
    }
}

function earningsAMD()
{

}