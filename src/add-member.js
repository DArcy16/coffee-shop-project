const form = document.querySelector('form')
const nameInput = document.querySelector("#name")
const jobInput = document.querySelector("#job")
const submitBtn = document.querySelector("#submit-btn")

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent= "Loading ..."

    const tempObj = {
			name: nameInput.value,
			job: jobInput.value,
		};



    try {
        const res = await fetch("https://reqres.in/api/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(tempObj),
				});

				if (res.ok) {
					alert("Successful");
					submitBtn.textContent = "Save";
				} else {
					alert("Unsccessful");
				}
    } catch (error) {
        throw new Error(error)
    }
})