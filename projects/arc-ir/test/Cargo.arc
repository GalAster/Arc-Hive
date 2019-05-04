% https://github.com/rust-lang/rust/blob/master/Cargo.toml
(workspace)
members = [
  'src/bootstrap',
  'src/rustc',
  'src/libstd',
  'src/libtest',
  'src/librustc_codegen_llvm',
  'src/tools/cargotest',
  'src/tools/clippy',
  'src/tools/compiletest',
  'src/tools/error_index_generator',
  'src/tools/linkchecker',
  'src/tools/rustbook',
  'src/tools/unstable-book-gen',
  'src/tools/tidy',
  'src/tools/build-manifest',
  'src/tools/remote-test-client',
  'src/tools/remote-test-server',
  'src/tools/rust-installer',
  'src/tools/cargo',
  'src/tools/rustdoc',
  'src/tools/rls',
  'src/tools/rustfmt',
  'src/tools/miri',
  'src/tools/rustdoc-themes',
]
exclude = [
  'build',
  % HACK(eddyb) This hardcodes the fact that our CI uses `/checkout/obj`.
  'obj',
]

% Curiously, LLVM 7.0 will segfault if compiled with opt-level=3
% See issue https://github.com/rust-lang/rust/issues/52378
(profile)
  (/release)
  opt-level = 2
  (/bench)
  opt-level = 2

% These options are controlled from our rustc wrapper script, so turn them off
% here and have them controlled elsewhere.
(profile)
  (/dev)
  debug = false
  debug-assertions = false
  (/test)
  debug = false
  debug-assertions = false

% We want the RLS to use the version of Cargo that we've got vendored in this
% repository to ensure that the same exact version of Cargo is used by both the
% RLS and the Cargo binary itself. The RLS depends on Cargo as a git repository
% so we use a `(patch)` here to override the github repository with our local
% vendored copy.
(patch)
  (/'https://github.com/rust-lang/cargo')
  cargo = { path = 'src/tools/cargo' }
  (/crates-io)
  % Similar to Cargo above we want the RLS to use a vendored version of `rustfmt`
  % that we're shipping as well (to ensure that the rustfmt in RLS and the
  % `rustfmt` executable are the same exact version).
  rustfmt-nightly = { path = 'src/tools/rustfmt' }
  % See comments in `src/tools/rustc-workspace-hack/README.md` for what's going on here
  rustc-workspace-hack = { path = 'src/tools/rustc-workspace-hack' }
  % See comments in `tools/rustc-std-workspace-core/README.md` for what's going on here
  rustc-std-workspace-core = { path = 'src/tools/rustc-std-workspace-core' }
  rustc-std-workspace-alloc = { path = 'src/tools/rustc-std-workspace-alloc' }
  (/'https://github.com/rust-lang/rust-clippy')
  clippy_lints = { path = 'src/tools/clippy/clippy_lints' }


