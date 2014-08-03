## ngMadLibs issues

 1. In the working version of this code, I have used a table to format the input fields and I have explicitly repeated Angular content in each. Both of these things seem to me in correct, but I haven't been able to get an alternative working.

        <tr>
          <td><input type="text" placeholder="{{ userReplmnts[0] }}" ng-model=userReplmnts[0] required></td>
          <td><input type="text" placeholder="{{ userReplmnts[1] }}" ng-model=userReplmnts[1] required></td>
          <td><input type="text" placeholder="{{ userReplmnts[2] }}" ng-model=userReplmnts[2] required></td>
        </tr>

 1. In `test_of_madlibs_grid_of_input_fields/non-working_table_block_for_ng-madlibs.html` is shown my attempt to solve the second of these problems:

        <tr>
          <td ng-repeat="replacement in replacements | limitTo: 3">
            <input type="text" placeholder="{{ replacement }}" 
                   ng-model="replacement">
          </td>
          ...

   This works as far as the first page of the app goes, but the filled-in MadLib does not work correctly. Apparently `ng-model` does not behave as expected this way.

 1. In `test_of_madlibs_grid_of_input_fields/index.html` is a bit of code intended to do away with tables.

        <input ng-repeat="item in replacements" type="text" placeholder="{{ item }}" ng-model=item>
        <br ng-show="($index + 1) % 3 === 0" />

   It appears here that the `<br />` only shows **after** all the `ng-repeats` are finished.

[end]
