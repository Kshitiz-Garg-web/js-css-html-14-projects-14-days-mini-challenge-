const addRow = document.querySelector(".add-row");
const registrationForm = document.querySelector(".modal");
const closeForm = document.querySelector(".modal .cross");
const update_btn = document.querySelector(".modal .input-box .update");
const saveBTN = document.querySelector(".header .save-btn");
const chemical_name = document.querySelector("#Chemical-name");
const vendor = document.querySelector("#vendor");
const density = document.querySelector("#Density");
const viscosity = document.querySelector("#Viscosity");
const packaging = document.querySelector("#Packaging");
const pack_size = document.querySelector("#Pack-size");
const unit = document.querySelector("#Unit");
const quantity = document.querySelector("#Quantity");

let all_chemical_data_array = [];

let defaultChemicalDataArray = [
  {
    id: 1,
    chemical_name: "Sulfuric Acid",
    vendor: "ABC Chemicals Ltd.",
    density: "1.84",
    viscosity: "26.7",
    packaging: "Plastic Drum",
    pack_size: "50",
    unit: "L",
    quantity: 100,
  },
  {
    id: 2,
    chemical_name: "Sodium Chloride",
    vendor: "XYZ Chemicals Inc.",
    density: "2.16",
    viscosity: "0.891",
    packaging: "Sack",
    pack_size: "25",
    unit: "kg",
    quantity: 500,
  },
  {
    id: 3,
    chemical_name: "Ethanol",
    vendor: "ChemWorld Co.",
    density: "0.789",
    viscosity: "1.2",
    packaging: "Steel Drum",
    pack_size: "200",
    unit: "L",
    quantity: 300,
  },
  {
    id: 4,
    chemical_name: "Acetone",
    vendor: "PureChem Supplies",
    density: "0.784",
    viscosity: "0.32",
    packaging: "Plastic Drum",
    pack_size: "100",
    unit: "L",
    quantity: 50,
  },
  {
    id: 5,
    chemical_name: "Ammonium Nitrate",
    vendor: "JP Handicrafts and sports",
    density: "1.72",
    viscosity: "God Knows",
    packaging: "Sack",
    pack_size: "50",
    unit: "kg",
    quantity: 200,
  },
  {
    id: 6,
    chemical_name: "Benzene",
    vendor: "ChemSolutions",
    density: "0.876",
    viscosity: "0.65",
    packaging: "Steel Barrel",
    pack_size: "150",
    unit: "L",
    quantity: 150,
  },
  {
    id: 7,
    chemical_name: "Hydrogen Peroxide",
    vendor: "Industrial Chemicals Co.",
    density: "1.45",
    viscosity: "1.245",
    packaging: "Plastic Drum",
    pack_size: "60",
    unit: "L",
    quantity: 120,
  },
  {
    id: 8,
    chemical_name: "Methanol",
    vendor: "GreenChem Ltd.",
    density: "0.792",
    viscosity: "0.544",
    packaging: "Steel Drum",
    pack_size: "210",
    unit: "L",
    quantity: 80,
  },
  {
    id: 9,
    chemical_name: "Sodium Hydroxide",
    vendor: "JP Handicrafts and sports",
    density: "2.13",
    viscosity: "God knows",
    packaging: "Sack",
    pack_size: "40",
    unit: "kg",
    quantity: 300,
  },
  {
    id: 10,
    chemical_name: "Acetic Acid",
    vendor: "FineChem Ltd.",
    density: "1.05",
    viscosity: "1.22",
    packaging: "Plastic Drum",
    pack_size: "30",
    unit: "L",
    quantity: 70,
  },
  {
    id: 11,
    chemical_name: "Toluene",
    vendor: "MegaChem Corp.",
    density: "0.867",
    viscosity: "0.59",
    packaging: "Steel Barrel",
    pack_size: "250",
    unit: "L",
    quantity: 90,
  },
  {
    id: 12,
    chemical_name: "Glycerin",
    vendor: "BioChem Industries",
    density: "1.26",
    viscosity: "1.412",
    packaging: "Plastic Barrel",
    pack_size: "220",
    unit: "L",
    quantity: 60,
  },
  {
    id: 13,
    chemical_name: "Potassium Nitrate",
    vendor: "JP Handicrafts and sports",
    density: "2.11",
    viscosity: "God knows",
    packaging: "Sack",
    pack_size: "55",
    unit: "kg",
    quantity: 400,
  },
  {
    id: 14,
    chemical_name: "Phosphoric Acid",
    vendor: "PureSolutions Inc.",
    density: "1.87",
    viscosity: "1.54",
    packaging: "Plastic Drum",
    pack_size: "100",
    unit: "L",
    quantity: 110,
  },
  {
    id: 15,
    chemical_name: "Formaldehyde",
    vendor: "JP Handicrafts and sports",
    density: "0.815",
    viscosity: "God knows",
    packaging: "Plastic Drum",
    pack_size: "150",
    unit: "L",
    quantity: 130,
  },
];

const table_data_dyn = document.querySelector(".table-box-add-dyn");
const reloadbtn = document.querySelector(".new-edit-btn");
const dltAll = document.querySelector(".delete-all");

// here we check for default case due JSON array of 15 entries
function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("all_chemical_data_array");
  if (storedData) {
    all_chemical_data_array = JSON.parse(storedData);
  } else {
    all_chemical_data_array = defaultChemicalDataArray;
    localStorage.setItem(
      "all_chemical_data_array",
      JSON.stringify(all_chemical_data_array)
    );
  }
}

// here we add a dyn way of html part---main row jisma entries hogi
function add_dynamic_html_part_Ls() {
  table_data_dyn.innerHTML = "";
  all_chemical_data_array.forEach((data, i) => {
    table_data_dyn.innerHTML += `
        <tr class="delete-row" index="${i}"> 
          <td class="col col1"><img src="./all-svg-icon-img/tick-icon.svg" alt="tick" /></td>
          <td class="col col2">${i + 1}</td>
          <td class="col col3">${data.chemical_name}</td>
          <td class="vendor-border col col4">${data.vendor}</td>
          <td class="col col5">${data.density}</td>
          <td class="col col6">${data.viscosity}</td>
          <td class="col col7">${data.packaging}</td>
          <td class="col col8">${data.pack_size}</td>
          <td class="col col9">${data.unit}</td>
          <td class="col col10">${data.quantity}</td>
          <td class="action col col11">
            <button title="Delete this Row" class="delete-btn">
              <img src="./all-svg-icon-img/trash-delete.svg" alt="delete" />
            </button>
            <button title="Edit Row" id="edit-btn">
              <img class="edit-img" src="./all-svg-icon-img/edit-pencil-svgrepo-com.svg" alt="reload" />
            </button>
          </td>
        </tr>`;
  });

  // in each row mai, delete to that particulr row krna k lya abbb
  const dlt_btn = document.querySelectorAll(".delete-btn");
  dlt_btn.forEach((btn, index) => {
    btn.onclick = function () {
      const sure_delte = confirm(
        `Are you sure you want to delete this Row no. ${index + 1}?`
      );
      if (sure_delte) {
        all_chemical_data_array.splice(index, 1);
        localStorage.setItem(
          "all_chemical_data_array",
          JSON.stringify(all_chemical_data_array)
        );
        add_dynamic_html_part_Ls();
      }
    };
  });

  // in each row mai, edit to that particulr row krna k lya abbb
  const edit_btn = document.querySelectorAll("#edit-btn");
  edit_btn.forEach((btn, index) => {
    btn.onclick = function () {
      // alert()
      const tr = btn.parentElement.parentElement;
      const td = tr.getElementsByTagName("TD");
      // console.log(td)
      registrationForm.classList.add("active");
      chemical_name.value = td[2].innerText;
      vendor.value = td[3].innerText;
      density.value = td[4].innerText;
      viscosity.value = td[5].innerText;
      packaging.value = td[6].innerText;
      pack_size.value = td[7].innerText;
      unit.value = td[8].innerText;
      quantity.value = td[9].innerText;
      update_btn.disabled = false;
      saveBTN.disabled = true;

      // update ji modal form k under h
      update_btn.onclick = function () {
        // alert("yes its working")
        all_chemical_data_array[index] = {
          chemical_name: chemical_name.value,
          vendor: vendor.value,
          density: density.value,
          viscosity: viscosity.value,
          packaging: packaging.value,
          pack_size: pack_size.value,
          unit: unit.value,
          quantity: quantity.value,
        };

        localStorage.setItem(
          "all_chemical_data_array",
          JSON.stringify(all_chemical_data_array)
        );
        add_dynamic_html_part_Ls();
        registrationForm.classList.remove("active");
        clearInputFields();
      };
    };
  });
}

function clearInputFields() {
  chemical_name.value = "";
  vendor.value = "";
  density.value = "";
  viscosity.value = "";
  packaging.value = "";
  pack_size.value = "";
  unit.value = "";
  quantity.value = "";
}

addRow.onclick = function () {
  registrationForm.classList.add("active");
  saveBTN.disabled = false;
  update_btn.disabled = true;
};

closeForm.onclick = function () {
  registrationForm.classList.remove("active");
  clearInputFields();
};

saveBTN.onclick = function () {
  // alert()
  const newChemical = {
    id: all_chemical_data_array.length + 1,
    chemical_name: chemical_name.value,
    vendor: vendor.value,
    density: density.value,
    viscosity: viscosity.value,
    packaging: packaging.value,
    pack_size: pack_size.value,
    unit: unit.value,
    quantity: quantity.value,
  };

  all_chemical_data_array.push(newChemical);
  localStorage.setItem(
    "all_chemical_data_array",
    JSON.stringify(all_chemical_data_array)
  );
  add_dynamic_html_part_Ls();
  registrationForm.classList.remove("active");
  clearInputFields();
};

reloadbtn.onclick = function () {
  location.reload();
};

dltAll.onclick = function () {
  const sure_delete_all = confirm("Are you sure you want to delete all data?");
  if (sure_delete_all) {
    localStorage.removeItem("all_chemical_data_array");
    all_chemical_data_array = [];
    add_dynamic_html_part_Ls();
  }
};

loadDataFromLocalStorage();
add_dynamic_html_part_Ls();

// //..........to move and down
let index = -1; //
function getSelectRow() {
  var table = document.querySelector("#tablee");
  if (table && table.rows) {
    for (var i = 26; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        if (typeof index !== "undefined" && index !== this.rowIndex) {
          if (index >= 26 && index < table.rows.length) {
            table.rows[index].classList.toggle("selected");
          }
        }
        index = this.rowIndex; //
        this.classList.toggle("selected");
        console.log("Selected row index:", index);
      };
    }
  } else {
    console.error("Table not found or no rows available.");
  }
}
getSelectRow();
function upNdown(direction) {
  var table = document.getElementById("tablee");
  var rows = table ? table.rows : null;
  if (!rows || index === -1 || !rows[index]) {
    console.error("No valid row selected or table not found.");
    return;
  }
  var parent = rows[index].parentNode;
  if (direction === "up") {
    if (index > 26) {
      parent.insertBefore(rows[index], rows[index - 1]);
      index--;
    }
  }
  if (direction === "down") {
    if (index < rows.length - 1) {
      parent.insertBefore(rows[index + 1], rows[index]);
      index++;
    }
  }
}
