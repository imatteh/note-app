document.addEventListener("DOMContentLoaded",function(event){
    let storedNotes = JSON.parse(localStorage.getItem("notes"));
        notesArray = storedNotes ? storedNotes : [],
        lastCount = localStorage.getItem("counter"),

        count = lastCount ? count : 0,
        
        list = document.getElementById("list");
        listRefresh();
    document.getElementById("add")
        .addEventListener("click", function () {
            let name = document.getElementById('name').value,
                content = document.getElementById('content').value,
                date = new Date();
            if (name === "") {
                alert("قم بإدخال اسم المذكرة من فضلك");
            }
            else {
                notesArray.push({
                    id: count,
                    name,
                    content,
                    date
                })
                count++;
                console.log("تمت الإضافة");
            }
            document.getElementById('name').value = '';
            document.getElementById('content').value = '';

            listRefresh();
        })
        
        function listRefresh()
        {
            list.innerHTML = '';
            for(let i = 0; i < notesArray.length; i++)
            {
                let name = notesArray[i].name,
                date = new Date(notesArray[i].date),
                dateString,
                element,
                divName,
                divDate;
               
                dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
               
                element = document.createElement("LI");

                divName = document.createElement("DIV");
                divName.textContent = name;

                divDate = document.createElement("DIV");
                divDate.textContent = dateString;

                element.appendChild(divName);
                element.appendChild(divDate);

                list.appendChild(element);

                localStorage.setItem("notes",JSON.stringify(notesArray));
                localStorage.setItem("counter",count);
                



            }

        }


});