
    document.addEventListener("DOMContentLoaded", function() {
        document.title = 'saksham tandon - Test 2';
        document.querySelector('.navbar-brand').textContent = 'Saksham';
        document.querySelector('footer .container').innerHTML = copy; {new Date().getFullYear()};

        let secondRow = document.querySelector('#test-table tbody tr:nth-child(2) td:nth-child(3)');
        secondRow.textContent = '100100100';

        let newRow = document.createElement('tr');
        newRow.innerHTML = <><td>Saksham</td><td>tandon</td><td>100881399</td></>;
        newRow.classList.add('table-info');
        document.querySelector('#test-table tbody').appendChild(newRow);

        let rows = document.querySelectorAll('#test-table tbody tr');
        rows.forEach(row => {
            if (row.children[0].textContent === 'Alice' && row.children[1].textContent === 'Bobberts') {
                row.remove();
            }
        });
        document.querySelector('tr.table-warning').classList.remove('table-warning');
  
          let johnDoeRow = document.querySelector('tr.table-dark');
          if (johnDoeRow) {
              johnDoeRow.classList.remove('table-dark');
              johnDoeRow.classList.add('table-success');
          }
  
          let main = document.querySelector('main');
          let container = document.createElement('div');
          container.className = 'container';
          let card = `<div class="card">
                          <img class="card-img-top" data-src="holder.js/100px150/" alt="Card image cap">
                          <div class="card-body">
                              <h5 class="card-title">Sahil</h5>
                              <p class="card-text">I am studying in Durham College.</p>
                          </div>
                      </div>`;
          container.innerHTML = card;
          main.appendChild(container);
  
          Holder.run();
      });



    

    

