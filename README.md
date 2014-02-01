# jspecs

BDD test-runner for writing specs using special BDD syntax.

## Installation

    % npm install jspecs --global

## Usage

Put the following into `feature.jspc` file:

    describe 'feature X' {

      it 'should work' {

        function no() { throw new Error('x'); }
        function yes() { }

        1 + 2 should == 2 + 1
        2 should != 1

        2 should > 1
        2 should >= 1
        1 should < 2
        1 should <= 2

        {x: 1} should have x

        true should be true
        false should be false

        true should be truthy
        null should be falsy

        no() should throw
        yes() should not throw

        "aabbcc" should contain "bb"
      }
    }

then use `jspecs` executable to run tests:

    % jspecs ./feature.jspc

Otherwise `jspecs` is a thin wrapper on top of `mocha` executable which
preprocesses specs sources before running them with Mocha.
